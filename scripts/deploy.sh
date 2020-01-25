#!/bin/bash

set -e

# Set up useful variables
branch=$(git rev-parse --abbrev-ref HEAD)
commit=$(git rev-parse --short HEAD)
version=${commit}
archive=website-$commit.zip
elbApp=website
elbEnvironment=website-$branch
s3bucket=siddhant-website-elb-bundles

# Exit early for all branches except `master` & `develop`
if [ $branch != "develop" ] && [ $branch != "master" ]
then
  echo "Non-standard branch, exiting"
  exit 0
fi

# Build the Sapper app
PORT=443 npm run build

# Create the code archive to upload to ELB, deleting old ones, if they exist
rm -rf $archive
zip \
  -x ".git/**" ".github/**" "node_modules/**" "__sapper__/dev/**" \
  -r $archive .

# Copy the archive to S3
aws s3 cp $archive s3://$s3bucket

# Create a new version on ELB
aws elasticbeanstalk create-application-version \
  --application-name $elbApp \
  --version-label $version \
  --source-bundle S3Bucket=$s3bucket,S3Key=$archive

# Update the environment to use this new version
aws elasticbeanstalk update-environment \
  --application-name $elbApp \
  --environment-name $elbEnvironment \
  --version-label $version

# Delete the code archive, since it now resides on S3
rm -rf $archive