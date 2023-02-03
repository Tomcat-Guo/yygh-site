import request from "@/utils/request";

const api_name = "/api/hosp/hospital";

export default {
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: "get",
      params: searchObj,
    });
  },
  findByHosname(hosname) {
    return request({
      url: `${api_name}/findByHosname/${hosname}`,
      method: "get",
    });
  },
  index(hoscode) {
    return request({
      url: `${api_name}/department/${hoscode}`,
      method: "get",
    });
  },
  item(hoscode) {
    return request({
      url: `${api_name}/${hoscode}`,
      method: "get",
    });
  },
  show(hoscode) {
    return request({
      url: `${api_name}/getHospital/${hoscode}`,
      method: "get",
    });
  },
};
