import request from "@/utils/request";

const api_name = "/admin/cmn/dict";

export default {
  findByDictCode(dictCode) {
    return request({
      url: `${api_name}/findByDictCode/${dictCode}`,
      method: "get",
    });
  },
  findChildData(id) {
    return request({
      url: `${api_name}/findChildData/${id}`,
      method: "get",
    });
  },
};
