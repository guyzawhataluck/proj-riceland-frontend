import apis from "../../api/index"

//let users
const fetchData = async () => {
const result = await apis.getAllCustumer();
console.log(result.data);
return result.data
};
let users = fetchData().then((value) => {return value})
console.log(users)


var send = [
  {
    label: "users[0].id",
    name: "users[0].name",
    email: 'pending',
    telephone: 'warning',
    product: 60,
    size: 'Angular Now UI Kit PRO',
    material: 'Angular Now UI Kit PRO',
    dest: '$1800 USD',
    remark: 'completed',
    status: 'success',
    edit: 'x'
  },
]

export default send
  