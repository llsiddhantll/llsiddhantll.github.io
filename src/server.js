import sirv from 'sirv'
import express from 'express'
import compression from 'compression'
import * as sapper from '@sapper/server'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

const forceHTTPS = () => (req, res, next) => {
  if (!dev && req.secure) {
    return res.redirect('https://' + req.get('host') + req.url)
  }

  next()
}

express()
  .use(
    forceHTTPS(),
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log('error', err)
  })
