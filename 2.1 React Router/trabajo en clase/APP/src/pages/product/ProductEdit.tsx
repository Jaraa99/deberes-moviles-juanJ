import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, InputNumber } from "antd";
import React from "react";

export const ProductEdit = () => {
    const { formProps, saveButtonProps } = useForm({
        // Puedes agregar opciones adicionales aquí si es necesario
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Nombre del Producto"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese el nombre del producto',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Descripción"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese la descripción del producto',
                        },
                    ]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item
                    label="Precio"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese el precio del producto',
                        },
                        {
                            type: 'number',
                            min: 0,
                            message: 'El precio debe ser un número positivo',
                        },
                    ]}
                >
                    <InputNumber
                        style={{ width: "100%" }}
                        formatter={value => `$ ${value ?? ''}`}
                        parser={value => (value ? value.replace(/\$\s?|(,*)/g, '') : '')}
                    />
                </Form.Item>
            </Form>
        </Edit>
    );
};
