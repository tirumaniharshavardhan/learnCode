import { Router } from "express"
import { CourseModel } from "../db.mjs";

const courseRouter = Router();

courseRouter.get('/purchases', (request, response) => {
    response.json({
        message: 'course purchase endpoint.'
    })
})

courseRouter.post('/preview', (request, response) => {
    response.json({
        message: 'course preview endpoint.'
    })
})

export {courseRouter}
