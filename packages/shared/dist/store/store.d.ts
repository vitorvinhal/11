export declare const noop: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"app/noop">;
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    app: {
        ready: boolean;
    };
}, import("@reduxjs/toolkit").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("@reduxjs/toolkit").StoreEnhancer<{
    dispatch: import("@reduxjs/toolkit").ThunkDispatch<{
        app: {
            ready: boolean;
        };
    }, undefined, import("@reduxjs/toolkit").UnknownAction>;
}>, import("@reduxjs/toolkit").StoreEnhancer]>>;
