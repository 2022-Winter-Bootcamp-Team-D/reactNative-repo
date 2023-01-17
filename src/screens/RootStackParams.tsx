
export type RootStackParamList = {
    Main: undefined;
    Register: undefined;
    Map: undefined;
    MapList: undefined;
    Reservation: {
            store_name: string,
            waiting_order: Number,
            store_distance: Number,
            store_detail: String
            };
    Inquiry: undefined;
    Status: {
            myResponse: waitingReady,
            store_name: string
            };
    Search: undefined;
    SearchResult: undefined;
    Signup: undefined;
};

type waitingReady = {
        create_at: Date,
        people: number,
        waiting_id: number,
        waiting_order: number,
        store_name: string
}