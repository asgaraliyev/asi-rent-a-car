import fetch from "node-fetch";

 const main_constant= {
    company_name:"RUM Rent A Car",
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.1320669285665!2d49.87584659999999!3d40.405924999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d49c7852147%3A0xbaf7341ccd131a39!2sRentacar%20Rum!5e0!3m2!1sen!2s!4v1670099227312!5m2!1sen!2s",
    api_url:process.env.api_url,
    phone:"+944559095005",
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