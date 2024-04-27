import { publicProcedure, router } from '../trpc';
import { z } from 'zod';

const userRouter = router({
    ticket: publicProcedure
        .input(z.string())
        .mutation(() => {

        })
});

export default userRouter;