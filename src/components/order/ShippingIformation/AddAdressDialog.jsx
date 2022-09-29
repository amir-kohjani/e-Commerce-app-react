import { Alert, Autocomplete, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Provinces } from "../../../Data/Provinces";
import { Cities } from "../../../Data/cities";
import { pink } from "@mui/material/colors";
import { ErrorOutline } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  max-width: 650px;
  min-width: 620px;
`;

const Title = styled.h1`
  font-size: 16pt;
`;

const Item = styled.div`
  margin: 10px;
  padding: 5px;
  width: 250px;
`;

const WrapperUserInfo = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-flow: wrap;
  justify-content: center;
`;

const WrapperSenddindInfo = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-flow: wrap;
  justify-content: center;
`;

const SubmitBtn = styled.button`
  width: 40%;
  font-size: 20pt;
  border: 0.5px solid ${pink[500]};
  border-radius: 10px;
  color: white;
  background-color: ${pink[500]};

  &:active {
    color: ${pink[500]};
    background: none;
  }
`;

const AddAdressDialog = ({ data, onSubmit }) => {
  const [provincesName, setProvincesName] = useState([]);
  const [citiesFlag, setCitiesFlag] = useState(true);
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(false);

  const [state, setState] = useState({
    provinceName: "",
    name: "",
    lastName: "",
    mobilePhone: "",
    title: "",
    phone: "",
    cityName: "",
    postCode: "",
    postAddress: "",
    description: "",
  });

  const submitHandler = () => {
    if (valitation() && !error)
      onSubmit({
        state,
      });
    else {
      setError(true);
    }
  };
  const valitation = () => {
    return true;
  };
  useEffect(() => {
    Provinces.map((province) => {
      if (province.label === state.provinceName) {
        setCities(Cities.filter((city) => city.province_id === province.id));
        setCitiesFlag(false);
      }
    });
  }, [state.provinceName]);

  return (
    <Container>
      <Title>اطلاعات شخص تحویل گیرنده</Title>
      <WrapperUserInfo>
        <Item>
          <TextField
            required
            id="outlined-required"
            label="نام"
            defaultValue={state.name}
            placeholder="مثال : علی "
            fullWidth
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </Item>
        <Item>
          <TextField
            required
            id="outlined-required"
            label="نام خانوادگی"
            placeholder="مثال قاسمی"
            defaultValue={state.lastName}
            fullWidth
            onChange={(e) => setState({ ...state, lastName: e.target.value })}
          />
        </Item>
      </WrapperUserInfo>
      <Title>اطلاعات ارسال</Title>
      <WrapperSenddindInfo>
        <Item>
          <TextField
            id="outlined-required"
            label="عنوان آدرس"
            defaultValue={state.title}
            placeholder="مثال : فروشگاه پانیز "
            fullWidth
            onChange={(e) => setState({ ...state, title: e.target.value })}
          />
        </Item>{" "}
        <Item>
          <TextField
            required
            id="outlined-required"
            label="شماره تلفن همراه"
            defaultValue={state.mobilePhone}
            type="phone"
            placeholder="مثال : ۰۹۳۶۶۶۹۰۲۰۲ "
            fullWidth
            onChange={(e) => setState({...state,mobilePhone:e.target.value})}
          />
        </Item>{" "}
        <Item>
          <TextField
            required
            id="outlined-required"
            label="شماره تلفن ثابت"
            defaultValue={state.phone}
            placeholder="مثال : ۰۵۱۲۷۳۰۱۰۰ "
            fullWidth
            onChange={(e) => setState({...state,phone:e.target.value})}
          />
        </Item>{" "}
        <Item>
          <Autocomplete
            id="combo-box-demo"
            options={Provinces}
            fullWidth
            onSelect={(e) => setState({...state,provinceName:e.target.value})}
            renderInput={(params) => <TextField {...params} label="استان" />}
          />
        </Item>{" "}
        <Item>
          <Autocomplete
            disabled={citiesFlag}
            id="combo-box-demo"
            options={cities}
            fullWidth
            onSelect={(e) => setState({...state,cityName:e.target.value})}
            renderInput={(params) => <TextField {...params} label="شهر" />}
          />
        </Item>{" "}
        <Item>
          <TextField
            required
            id="outlined-required"
            label="کد پستی"
            defaultValue={state.postCode}
            placeholder="مثال : ۱۲۳۴۵۶۷۸۹ "
            fullWidth
            onChange={(e) => setState({...state,postCode: e.target.value})}
          />
        </Item>{" "}
        <Item>
          <TextField
            required
            id="outlined-required"
            label="آدرس پستی"
            defaultValue={state.potAddress}
            maxRows="3"
            minRows="2"
            multiline
            fullWidth
            onChange={(e) => setState({...state,postAddress: e.target.value})}
          />
        </Item>{" "}
        <Item>
          <TextField
            id="outlined-required"
            label="توضیحات"
            defaultValue={state.description}
            maxRows="3"
            minRows="2"
            multiline
            fullWidth
            onChange={(e) =>setState({...state,decoration:e.target.value})}
          />
        </Item>
        <SubmitBtn onClick={submitHandler}>ثبت آدرس</SubmitBtn>
      </WrapperSenddindInfo>
      {error && (
        <Alert icon={<ErrorOutline />} color="error" sx={{ mt: "10px" }}>
          خطا! لطفا فیلد ها را به طور صحیح کامل کنید!
        </Alert>
      )}
    </Container>
  );
};

export default AddAdressDialog;
