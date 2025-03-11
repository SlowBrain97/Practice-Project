import { DatePicker, Form, Input, Select, Upload } from "antd";
const { Option } = Select;
import { PlusOutlined } from "@ant-design/icons";
import { forwardRef, useEffect, useState } from "react";
import React from "react";
import { createApi, updateApi } from "./api/ApiRespository";
import PropTypes from "prop-types";
import dayjs from "dayjs";
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="81">+81</Option>
      <Option value="84">+84</Option>
    </Select>
  </Form.Item>
);

const FormModal = forwardRef(({ student, method }, ref) => {
  const [fileLists, setFileList] = useState([]);
  const [form] = Form.useForm();
  useEffect(() => {
    if (student) {
      form.setFieldsValue({
        firstName: student.firstName,
        lastName: student.lastName,
        dateOfBirth: student.dateOfBirth ? dayjs(student.dateOfBirth) : null,
        gender: student.gender,
        numberCard: student.numberCard,
        phoneNumber: student.phoneNumber,
        postCode: student.addresss.postCode,
        street: student.addresss.street,
        avatar: student.avatar,
      });
    }
  }, [student]);
  const handleSubmit = (e) => {
    const formData = new FormData();
    let newStudent = {};
    Object.entries(e).forEach(([key, value]) => {
      if (key !== "avatar") {
        newStudent[key] = value;
      }
    });
    if (student) {
      newStudent.id = student.id;
    }
    formData.append("newStudent", JSON.stringify(newStudent));
    if (fileLists.length > 0) {
      formData.append(fileLists[0].originFileObj);
    }
    form.setFieldValue(<h5>Submitting data....</h5>);
    if (method === "create") createApi(formData);
    else updateApi(formData);
  };
  React.useImperativeHandle(ref, () => ({
    submit: () => {
      form.submit();
    },
  }));
  const handleOnChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  return (
    <Form
      {...layout}
      style={{
        maxWidth: 800,
      }}
      validateMessages={validateMessages}
      onFinish={handleSubmit}
      form={form}
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true }]}
      >
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
        <Select>
          <Select.Option value="Male">Male</Select.Option>
          <Select.Option value="Female">Female</Select.Option>
          <Select.Option value="Other">Other</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Date Of Birth"
        name="dateOfBirth"
        rules={[{ required: true }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Postal Code"
        name="postCode"
        rules={[
          {
            required: true,
            message: "Please input your postal code!",
          },
          {
            pattern: /^[0-9]{7}$/,
            message: "Postal code must be a 7-digit number!",
          },
        ]}
      >
        <Input placeholder="Enter your postal code" />
      </Form.Item>
      <Form.Item label="Address" name="street" rules={[{ required: true }]}>
        <Input.TextArea rows={2} />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item label="Avatar" valuePropName="avatar" name="avatar">
        <Upload
          accept=".png,.jpg,.svg"
          beforeUpload={() => false}
          fileList={fileLists}
          onChange={handleOnChange}
        >
          <button
            style={{
              border: 0,
              background: "none",
            }}
            type="button"
          >
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </button>
        </Upload>
      </Form.Item>
    </Form>
  );
});
FormModal.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    dateOfBirth: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
    gender: PropTypes.string,
    numberCard: PropTypes.string,
    phoneNumber: PropTypes.string,
    addresss: PropTypes.shape({
      postCode: PropTypes.string,
      street: PropTypes.string,
    }),
    avatar: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.instanceOf,
    ]),
  }),
  method: PropTypes.string,
};
FormModal.displayName = "FormModal";
export default FormModal;
