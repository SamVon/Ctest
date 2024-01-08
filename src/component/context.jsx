import React from 'react'
import Logo from '../assets/profile.jpeg'


function context() {
  return (
    <div className="w3-content w3-container w3-padding-64" id="about">
      <h3 className="w3-center">ABOUT ME</h3>
      <p className="w3-center"><em>I Like Programeing</em></p>
      <p>ສະບາຍດີທຸກຄົນ ຂ້ອຍຊື່ວ່າທ້າວ ສາມພະໄທ ວອນມະນີ ເກີດວັນທີ 08-10-2000 ທີ່ສ້າງເວ໋ບຂື້ນມານີ້ເປັນການເເນະນຳໂຕຂ້ອຍເອງ ແລະ ຄວາມຝັນຂອງຂ້ອຍ. <br /> ບ້ານເກີດຂອງຂ້ອຍແມ່ນຢູ່ທີ່ ນະຄອນໄກສອນ ພົມວິຫານ ເເຂວງສະຫວັນນະເຂດ ບ້ານນາເລົ່າ ຕອນປະຖົມສືກສາຢູ່ທີ່ ໂຮງຮຽນສະຫວ່າງຫຼັກ 3 ຫຼັງຈາກຈົບໄດ້ຮຽນ ຕໍ່ທີ່ໂຮງຮຽນມັດທະຍົມຕອນຕົ້ນ ເລກ 3 ຫລັງຈາກຈົບມໍ 4 ໄດ້ໄປຮຽນຕໍ່ທີ່ ໂຮງຮຽນ ມສ ສະຫວັນ (ເລກ4) ແລະ ສືກສາປະລິນຍາຕິທີ່ມະຫາວິທະຍາໄລແຫ້ງຊາດ ຄະນະວິທະຍາສາດ ສາຂາ internet Technology ຈົບການສືກສາໃນປິ 2022.<br /></p>
      <div className="w3-row">
        <div className="w3-col m6 w3-center w3-padding-large">
          <p><b><i className="fa fa-user w3-margin-right"></i>My Name is Samphathai VONEMANY</b></p><br />
          <img src={Logo} className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="50" />
        </div>

        <div className="w3-col m6 w3-hide-small w3-padding-large">
          <p>Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      <p className="w3-large w3-center w3-padding-16">ພາສາຄອມພິວເຕີ ທີ່ສາມາດຂຽນໄດ້</p>
      <p className="w3-wide"><i className="fa fa-laptop"></i>Vue</p>
      <div className="w3-light-grey">
        <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{ width: "70%" }}>90%</div>
      </div>
      <p className="w3-wide"><i className="fa fa-laptop"></i>Web Design</p>
      <div className="w3-light-grey">
        <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{ width: "85%" }}>85%</div>
      </div>
      <p className="w3-wide"><i className="fa fa-laptop"></i>React</p>
      <div className="w3-light-grey">
        <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{ width: "60%" }}>75%</div>
      </div>
      <p className="w3-wide"><i className="fas fa-laravel"></i>lavarel</p>
      <div className="w3-light-grey">
        <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{ width: "50%" }}>75%</div>
      </div>
      <p className="w3-large w3-center w3-padding-16">Skill</p>
      <p className="w3-wide"><i className="fa fa-github"></i>Git</p>
      <div className="w3-light-grey">
        <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{ width: "70%" }}>90%</div>
      </div>
    </div>
    
  )
}

export default context