import {
    CallHandler,
    ExecutionContext,
    Logger,
    NestInterceptor,
}   from '@nestjs/common';
import { Observable, tap } from 'rxjs';
export class ExecutionTime implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler
    ): Observable<any> | Promise<Observable<any>> {
        const hadler = context.getHandler();
        const methodName = hadler.name;
        const className = context.getClass().name;
        this.logger.log(`Before... ${className} | ${methodName}`);
        const start = Date.now();
        return next.handle().pipe(tap(() => {
            this.logger.log(
                `After... ${className}.${methodName} took ${Date.now() - start} ms`
            );
        }));
    };
    private readonly logger = new Logger(ExecutionTime.name);
}