export declare const noop: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"app/noop">;
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    app: {
        ready: boolean;
    };
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("@reduxjs/toolkit").ThunkDispatch<{
        app: {
            ready: boolean;
        };
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
