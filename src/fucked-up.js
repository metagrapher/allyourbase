function test() {
  if (err instanceof Error) {
    const posthog = PostHogClient(context.locals.runtime.env)
    posthog.capture( 
      { distinctId: 'anonymous'
      , event: 'middleware_error'
      , properties:
        { message: err.message
        , stack: err.stack
        , function: 'APIHandler'
        , pathname: context.url.pathname
        , method: context.request.method
        , cf: context.locals.runtime.cf || 'unknown'
        }
      }
    )
  }
}

