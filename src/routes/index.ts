import { Router } from 'express'

import { Database } from '../app'

import teamsRouter from './teams.route'
import usersRouter from './users.route'
import scoreRouter from './score.route'

export default function (database: Database): Router {
  const router = Router()

  router.use('/teams', teamsRouter(database))
  router.use('/users', usersRouter(database))
  router.use('/score', scoreRouter(database))

  router.get('/', async (_, res) => {
    res.status(200).send('Good Luck')
  })

  return router
}
