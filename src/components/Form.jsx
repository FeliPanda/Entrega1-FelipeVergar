import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { db } from "./firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const CustomForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        lastName: "",
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.email && formData.name && formData.lastName) {
            try {
                const docRef = await addFormDataToFirebase(formData);
                Swal.fire({
                    icon: "success",
                    title: "Éxito",
                    text: `Su ID de compra fue: ${docRef.id}`,
                });
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Ocurrió un error al guardar los datos en Firebase",
                });
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Por favor, complete todos los campos",
            });
        }
    };

    const addFormDataToFirebase = async (formData) => {
        const docRef = await addDoc(collection(db, "formData"), formData);
        return docRef;
    };

    return (
        <Container className="bg-light p-4">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingrese su correo electrónico"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su nombre"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su apellido"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <div className="text-center mt-4">
                    <Button variant="primary" type="submit">
                        Enviar información
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default CustomForm;
