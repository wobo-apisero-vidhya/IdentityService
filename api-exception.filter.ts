import { 
    Catch, 
    ArgumentsHost, 
    BadRequestException, 
    UnauthorizedException, 
    ForbiddenException, 
    NotFoundException,
    MethodNotAllowedException,
    NotAcceptableException,
    RequestTimeoutException,
    ConflictException,
    GoneException,
    ExceptionFilter,
    PreconditionFailedException,
    PayloadTooLargeException,
    UnsupportedMediaTypeException,
    UnprocessableEntityException
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { ApiException } from 'api-exception.model';

@Catch(BadRequestException)
class BadRequestExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The server cannot or will not process the request due to an apparent client error.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(UnauthorizedException)
class UnauthorizedExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "Authorization failed or was not provided.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(ForbiddenException)
class ForbiddenExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "Server refusing action. Please check if you all the required permissions.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(NotFoundException)
class NotFoundExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The requested resource could not be found but may be available in the future.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(MethodNotAllowedException)
class MethodNotAllowedExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "A request method is not supported for the requested resource.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(NotAcceptableException)
class NotAcceptableExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The request is not acceptable as per the Accept Headers sent in the request.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(RequestTimeoutException)
class RequestTimeoutExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The server timed out waiting for the request.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(ConflictException)
class ConflictExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The request could not be processed because of conflict in the current state of the resource",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(GoneException)
class GoneExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The resource requested is no longer available and will not be available again.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(PreconditionFailedException)
class PreconditionFailedExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The server does not meet one of the preconditions that the requester put on the request header fields.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(PayloadTooLargeException)
class PayloadTooLargeExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The request is larger than the server is willing or able to process.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(UnsupportedMediaTypeException)
class UnsupportedMediaTypeExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody = {
          statusCode: exception.getStatus(),
          message: "The request entity has a media type which the server or resource does not support.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(UnprocessableEntityException)
class UnprocessableEntityExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody = {
          statusCode: exception.getStatus(),
          message: "The request was well-formed but was unable to be followed due to semantic errors.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

export { 
    BadRequestExceptionFilter, 
    UnauthorizedExceptionFilter, 
    ForbiddenExceptionFilter, 
    NotFoundExceptionFilter,
    MethodNotAllowedExceptionFilter,
    NotAcceptableExceptionFilter,
    RequestTimeoutExceptionFilter,
    ConflictExceptionFilter,
    GoneExceptionFilter,
    PayloadTooLargeExceptionFilter,
    PreconditionFailedExceptionFilter,
    UnsupportedMediaTypeExceptionFilter,
    UnprocessableEntityExceptionFilter
}