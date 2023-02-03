
export type RootStackParamList = {
    Main: undefined;
    Login: undefined;
    Map: undefined;
    MapList: undefined;
    Reservation: {
        mySite: around
    };
    ReservationResult: {
        myResponse: waitingReady,
        store_name: string,
    };
    Inquiry: undefined;
    Status: undefined;
    Search: undefined;
    SearchResult: {search: string};
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

type search = {
    store_id: number;
    store_name: string;
    distance: number;
    waiting: number;
    information: string;
}

type waitingReady = {
        create_at: Date,
        people: number,
        waiting_id: number,
        waiting_order: number,
};

