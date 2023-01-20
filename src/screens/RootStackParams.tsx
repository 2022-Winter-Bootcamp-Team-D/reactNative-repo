export type RootStackParamList = {
    Main: undefined;
    Register: undefined;
    Map: undefined;
    MapList: {
        mySite: around
    };
    Reservation: undefined;
    Inquiry: undefined;
    Status: undefined;
    Search: undefined;
    SearchResult: undefined;
};

type around = {
    store_id: number,
    store_name : string,
    distance: number,       // 나와의 떨어진 거리
    waiting: number,        // 현재 웨이팅을 받고 있는지?
    is_waiting: boolean,
    information : string
    my_position: string
}