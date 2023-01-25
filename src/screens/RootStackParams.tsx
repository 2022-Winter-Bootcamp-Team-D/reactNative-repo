
export type RootStackParamList = {
    Main: undefined;
    Login: undefined;
    Map: undefined;
    MapList: {
        mySite: around
    };
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
};

type around = {
        store_id: number,
        store_name : string,
        distance: number,
        waiting: number,
        is_waiting: boolean,
        information : string,
        my_position: string
}