export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIxMC8wNC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODEwODQ4MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY4MTIzMjQwMH0._MPzAQorNhL5oVaR3-Az5_jYKW0_Acc0NBq1nZapr5k"


export const Authorization = JSON.parse(localStorage.getItem('token'))
export const assetToken = `Bearer ${Authorization}`
export const DOMAIN = "https://jiranew.cybersoft.edu.vn"