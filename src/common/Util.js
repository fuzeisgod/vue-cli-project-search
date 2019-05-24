const Util = {
    SearchAPI(router,searchText) {
        if (searchText !== "") {
            router.push(`/search/${searchText}`);
        }
    }
}

export default Util;