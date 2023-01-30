
export type RootStackParamList = {
    Main: undefined;
    Login: undefined;
    Map: undefined;
    MapList: {
        mySite: around
    };
    Reservation: {
        mySite: around
        };
    ReservationResult: {
        myResponse: waitingReady,
        store_name: string,
        create_at: Date,
        people: number,
        waiting_id: number,
        waiting_order: number,
    };
    Inquiry: undefined;
    Status: undefined;
    Search: undefined;
    SearchResult: undefined;
    Signup: undefined;
};

type around = {
    store_id: number;
    store_name: string;
    distance: number;
    waiting: number;
    is_waiting: boolean;
    information: string;
    latitude: number;
    longitude: number;
}

type waitingReady = {
        create_at: Date,
        people: number,
        waiting_id: number,
        waiting_order: number,
};

