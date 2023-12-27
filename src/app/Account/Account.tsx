import Image from "next/image";

import "@/assets/css/account.scss";

import ProfileForm from "../../components/ProfileForm";
import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";

import { user } from "@/utils/data";

const Account = () => {
  return (
    <div className="account">
      <Banner />
      <div className="information">
        <span className="title"> Personal Information</span>
        <div className="form">
          <ProfileForm {...user} />
        </div>
        <span className="paragraph">
          Use this email to log in to your <a className="link">resumedone.io</a>{" "}
          account and receive notifications.
        </span>
        <Button text="Save" handleClick={() => alert("click")} />
      </div>
      <div className="show">
        <CheckBox />
        <span className="paragraph">
          Show my profile to serious employers on{" "}
          <a className="link">hirethesbest.io </a>for free
        </span>
      </div>
      <div className="delete">
        <span className="title">Delete account</span>
        <span className="paragraph">
          If you delete your account you’ll be permanently removing it from our
          systems - you can’t undo it.
        </span>
        <span className="confirm">Yes, Delete my account</span>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
