const base = {
    get() {
        return {
            url : "http://localhost:8080/zhunongchanpincaigou/",
            name: "zhunongchanpincaigou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zhunongchanpincaigou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "助农产品采购平台"
        } 
    }
}
export default base
