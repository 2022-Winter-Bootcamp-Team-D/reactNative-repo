export type RootStackParamList = {
    Main: undefined;
    Register: undefined;
    Map: undefined;
    MapList: undefined;
    Reservation: undefined;
    Inquiry: undefined;
    Status: {
        myResponse: Response,
        create_at: Date,
        people: number,
        waiting_id: number,
        waiting_order: number
        };
    Search: undefined;
    SearchResult: undefined;
    Signup: undefined;
};