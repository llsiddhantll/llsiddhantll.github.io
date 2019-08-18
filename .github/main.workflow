workflow "Deploy on Now" {
    on       = "push"

    resolves = [
        "release",
        "svelte-alias"
    ]
}

# Deploy, and write deployment URL to a temporary file
action "deploy" {
    uses    = "actions/zeit-now@master"
    args    = "--public --no-clipboard deploy ./ > $HOME/$GITHUB_ACTION.txt"

    secrets = [
        "ZEIT_TOKEN"
    ]
}

# Always create an alias using the SHA
action "sha-alias" {
    needs   = "deploy"
    uses    = "actions/zeit-now@master"
    args    = "alias `cat $HOME/$GITHUB_ACTION.txt` $GITHUB_SHA"

    secrets = [
        "ZEIT_TOKEN"
    ]
}

# Filter for master branch
action "master-branch-filter" {
    needs = "sha-alias"
    uses  = "actions/bin/filter@master"
    args  = "branch master"
}

action "release" {
    needs   = "master-branch-filter"
    uses    = "actions/zeit-now@master"
    args    = "alias --local-config=./now.json"

    secrets = [
        "ZEIT_TOKEN"
    ]
}

# Filter for svelte branch
action "svelte-branch-filter" {
    needs = "sha-alias"
    uses  = "actions/bin/filter@master"
    args  = "branch svelte"
}

action "svelte-alias" {
    needs   = "svelte-branch-filter"
    uses    = "actions/zeit-now@master"
    args    = "alias `cat $HOME/$GITHUB_ACTION.txt` svelte.madebysid.com"

    secrets = [
        "ZEIT_TOKEN"
    ]
}
