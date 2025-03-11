import {
  SearchOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./Teacher.css";
import { Button, Input, Modal, Popconfirm, Table } from "antd";
import { useEffect, useRef, useState } from "react";
import {
  deleteApi,
  getAllApi,
  searchApi,
} from "../../utils/api/ApiRespository";
import FormModal from "../../utils/formModal";
import dayjs from "dayjs";

const Teacher = () => {
  const [datasource, setDatasource] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const formRef = useRef();
  const [isPosting, setIsPosting] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const fetchApi = async () => {
    const res = await getAllApi();
    const dataWithKeys = res.data.map((item) => ({
      ...item,
      key: item.id,
    }));
    setDatasource(dataWithKeys);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  const handleSearch = (value) => {
    searchApi(value);
  };
  const handleAddNew = () => {
    setOpenModal(!openModal);
  };
  const handleOk = async () => {
    setIsPosting(true);
    formRef.current.submit();
    await new Promise((resolve) => setTimeout(resolve, 500));
    setOpenModal(false);
    setIsPosting(false);
    await fetchApi();
  };
  const handleEditTeacher = async () => {
    setIsPosting(true);
    formRef.current.submit();
    await new Promise((resolve) => setTimeout(resolve, 500));
    setEditModal(false);
    setIsPosting(false);
    await fetchApi();
  };
  const handleDelete = (id) => {
    const removeApi = async () => {
      const response = await deleteApi(id);
      return await response.json();
    };
    removeApi();
    setDatasource((prevData) =>
      prevData.filter((teacher) => teacher.id !== id)
    );
  };
  const handleClickSetting = (teacher) => {
    setSelectedTeacher(teacher);
    setEditModal(true);
  };
  const columns = [
    {
      title: "ID",
      key: "id",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      defaultSortOrder: "descend",
      hidden: true,
    },
    {
      key: "avatar",
      title: "Avatar",
      dataIndex: "avatar",
      render: (image) => {
        return (
          <img
            src={image}
            style={{ width: "45px", height: "auto", borderRadius: "100%" }}
          ></img>
        );
      },
    },
    {
      key: "cardNumber",
      title: "Card Number",
      dataIndex: "numberCard",
    },
    {
      key: "firstName",
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      key: "lastName",
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      key: "dateOfBirth",
      title: "Date Of Birth",
      dataIndex: "dateOfBirth",
      sorter: (a, b) => a.dateOfBirth - b.dateOfBirth,
      render: (date) => dayjs(date).format("YYYY-MM-DD"),
    },
    {
      key: "gender",
      title: "Gender",
      dataIndex: "gender",
    },
    {
      key: "postCode",
      title: "Post Code",
      dataIndex: ["addresss", "postCode"],
    },
    {
      key: "street",
      title: "Street",
      dataIndex: ["addresss", "street"],
      render: (street) => (
        <p style={{ overflow: "hidden", color: "GrayText", fontSize: "12px" }}>
          {street}
        </p>
      ),
    },
    {
      key: "phone",
      title: "Phone Number",
      dataIndex: "phoneNumber",
    },
    {
      key: "action",
      title: "Action",
      render: (_, teacher) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Popconfirm
            title="Are you sure to delete this teacher?"
            onConfirm={() => handleDelete(teacher.id)}
            okText="OK"
            cancelText="Cancel"
          >
            <Button
              type="text"
              icon={<DeleteOutlined style={{ color: "red" }} />}
            />
          </Popconfirm>

          <Button
            type="text"
            icon={<SettingOutlined style={{ color: "green" }} />}
            onClick={() => handleClickSetting(teacher)}
          />
        </div>
      ),
    },
  ];
  return (
    <div className="teacher">
      <div className="inner-wrap">
        <Input
          placeholder="Search teacher by teacher's number or name"
          suffix={
            <SearchOutlined
              style={{ cursor: "pointer" }}
              onClick={handleSearch}
            />
          }
          style={{ width: "40%" }}
        />
        <button onClick={handleAddNew} style={{ cursor: "pointer" }}>
          Add new teacher
        </button>
        <Modal
          title="Information"
          open={openModal}
          onCancel={() => {
            setOpenModal(false);
          }}
          onOk={handleOk}
          confirmLoading={isPosting}
        >
          <FormModal ref={formRef} method="create" />
        </Modal>
      </div>

      <Table dataSource={datasource} columns={columns}></Table>
      <Modal
        open={editModal}
        onCancel={() => setEditModal(false)}
        title="Edit Teacher's Information"
        onOk={handleEditTeacher}
        confirmLoading={isPosting}
      >
        {selectedTeacher && (
          <FormModal
            teacher={selectedTeacher}
            ref={formRef}
            method="update"
          ></FormModal>
        )}
      </Modal>
    </div>
  );
};

export default Teacher;
