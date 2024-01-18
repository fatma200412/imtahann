import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/slice/dataSlice";
import style from "./style.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  des: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  imageURL: Yup.string()
    .min(2, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
  price: Yup.number().required("Required"),
});

function AddData() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  console.log(data);
  return (
    <>
      <section>
        <div>
          <h1>Signup</h1>
          <Formik
            initialValues={{
              name: "",
              des: "",
              imageURL: "",
              price: 0,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Field name="name" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <Field name="des" />
                {errors.des && touched.des ? <div>{errors.des}</div> : null}
                <Field name="imageURL" />
                {errors.imageURL && touched.imageURL ? (
                  <div>{errors.imageURL}</div>
                ) : null}
                <Field name="price" type="number" />
                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
      <section className={style.tableSections}>
        <table className={style.table}>
          <thead>
            <th>Image Url</th>
            <th>Name</th>
            <th>Price</th>
            <th>Button</th>
          </thead>
          <tbody>
            {data &&
              data.map((elem, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <div className={style.image}>
                        {" "}
                        <img src={elem.imageURL} alt="" />
                      </div>
                    </td>
                    <td>{elem.name}</td>
                    <td>{elem.price}</td>
                    <td>
                      <button>DELETE</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default AddData;
