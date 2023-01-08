import fetch from "node-fetch";
 const main_constant= {
    company_name:"RUM Rent A Car",
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.1511149197468!2d49.876397700000005!3d40.405503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030877eb905bca3%3A0xbcbb8b31d8979443!2sRum%20Rent%20a%20Car!5e0!3m2!1sen!2s!4v1671961296105!5m2!1sen!2s",
    api_url:`http://localhost:3000/api`,
    phone:"+994559095005",
    secondPhone:"+994105255005",
    mail:"rumrentacarbaku@gmail.com",
    logo:"/assets/images/logo/logo.svg",
    address:"26 Aliyar Aliyev, Baku, Azerbaijan"
}
export default main_constant
export const registerHelpers = async ()=>{
    const categories=await (await fetch(main_constant.api_url+"/categories")).json()
    return {
      
      getCategories(){
        return categories
      },
      getMail() {
        return main_constant.mail;
      },
      getAddress() {
        return main_constant.address;
      },
      getMapSrc() {
        return main_constant.mapSrc;
      },
      getCompanyName() {
        return main_constant.company_name;
      },
      getPhone() {
        return main_constant.phone;
      },
      getSecondPhone() {
        return main_constant.secondPhone;
      },
      getPhoneUrl() {
        return `tel:${main_constant.phone}`;
      },
      getLogo() {
        return main_constant.logo;
      },
      getMain() {
        return JSON.stringify(main_constant);
      },
    }
  };
