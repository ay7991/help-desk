import * as trpc from '@trpc/server';
import { router } from '../trpc';

import userRouter from './users';
import adminRouter from './admins';

const appRouter = router({
    user: userRouter,
    admin: adminRouter
})

export type appRouter = typeof appRouter;