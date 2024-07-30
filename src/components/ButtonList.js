import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Mixes" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="News" />
      <Button name="Actions Thrillers" />
      <Button name="Vlogs" />
      <Button name="Luxury Cars" />
      <Button name="Branding Cloths" />
    </div>
  );
};

export default ButtonList;
