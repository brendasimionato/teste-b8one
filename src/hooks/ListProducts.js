import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import '../App.css'

export default function ListProducts() {

    const [addedProducts, setAddedProducts] = useState([])
    const [products, setProducts] = useState([
        {
            "id": 1,
            "img": "https://s3-alpha-sig.figma.com/img/8aee/533e/191823e7300d4478736e0057cbd01e2c?Expires=1637539200&Signature=PaCuPrTdCGr7rv~ESwsOpspKw3JBZx-2WSt4voD-Tw34Vle1Dq8OFCK3hHREMNQDJNh95hwo~dv~gYZPJs6N7HPU-3FSUFcT4MJOjzCCod4cJT6lgXDPJfFBSyMiHxS-mk0L4KF9zxCgO7~MvjUtRhuQA600CKMCysb~gvCBh7NPC1eAlCl4MQTDXvWEdPv5GDr785ewuc-iw42fkHrR1H~YzV76b4KjSfKart1lQOPRWEeRQJdxdPrJ0GmUvZksLKGb7kcVPJ~GUHukkZT2czz5Af47cOSFy-98VVmmgkteWgzKwV1hZz8HCkPaQmPfisApTga75PepvT9p6ef35Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            "title": "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
            "originalValue": 2813.99,
            "finalValue": 2599,
            "parcelValue": 259.90,
            "parcel": 10
        },
        {
            "id": 2,
            "img": "https://s3-alpha-sig.figma.com/img/8aee/533e/191823e7300d4478736e0057cbd01e2c?Expires=1637539200&Signature=PaCuPrTdCGr7rv~ESwsOpspKw3JBZx-2WSt4voD-Tw34Vle1Dq8OFCK3hHREMNQDJNh95hwo~dv~gYZPJs6N7HPU-3FSUFcT4MJOjzCCod4cJT6lgXDPJfFBSyMiHxS-mk0L4KF9zxCgO7~MvjUtRhuQA600CKMCysb~gvCBh7NPC1eAlCl4MQTDXvWEdPv5GDr785ewuc-iw42fkHrR1H~YzV76b4KjSfKart1lQOPRWEeRQJdxdPrJ0GmUvZksLKGb7kcVPJ~GUHukkZT2czz5Af47cOSFy-98VVmmgkteWgzKwV1hZz8HCkPaQmPfisApTga75PepvT9p6ef35Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            "title": "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
            "originalValue": 2813.99,
            "finalValue": 2599,
            "parcelValue": 259.90,
            "parcel": 10
        },
        {
            "id": 3,
            "img": "https://s3-alpha-sig.figma.com/img/8aee/533e/191823e7300d4478736e0057cbd01e2c?Expires=1637539200&Signature=PaCuPrTdCGr7rv~ESwsOpspKw3JBZx-2WSt4voD-Tw34Vle1Dq8OFCK3hHREMNQDJNh95hwo~dv~gYZPJs6N7HPU-3FSUFcT4MJOjzCCod4cJT6lgXDPJfFBSyMiHxS-mk0L4KF9zxCgO7~MvjUtRhuQA600CKMCysb~gvCBh7NPC1eAlCl4MQTDXvWEdPv5GDr785ewuc-iw42fkHrR1H~YzV76b4KjSfKart1lQOPRWEeRQJdxdPrJ0GmUvZksLKGb7kcVPJ~GUHukkZT2czz5Af47cOSFy-98VVmmgkteWgzKwV1hZz8HCkPaQmPfisApTga75PepvT9p6ef35Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            "title": "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
            "originalValue": 2813.99,
            "finalValue": 2599,
            "parcelValue": 259.90,
            "parcel": 10
        },
        {
            "id": 4,
            "img": "https://s3-alpha-sig.figma.com/img/8aee/533e/191823e7300d4478736e0057cbd01e2c?Expires=1637539200&Signature=PaCuPrTdCGr7rv~ESwsOpspKw3JBZx-2WSt4voD-Tw34Vle1Dq8OFCK3hHREMNQDJNh95hwo~dv~gYZPJs6N7HPU-3FSUFcT4MJOjzCCod4cJT6lgXDPJfFBSyMiHxS-mk0L4KF9zxCgO7~MvjUtRhuQA600CKMCysb~gvCBh7NPC1eAlCl4MQTDXvWEdPv5GDr785ewuc-iw42fkHrR1H~YzV76b4KjSfKart1lQOPRWEeRQJdxdPrJ0GmUvZksLKGb7kcVPJ~GUHukkZT2czz5Af47cOSFy-98VVmmgkteWgzKwV1hZz8HCkPaQmPfisApTga75PepvT9p6ef35Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            "title": "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
            "originalValue": 2813.99,
            "finalValue": 2599,
            "parcelValue": 259.90,
            "parcel": 10
        }
    ])

    const onClickAdd = (id) => {
        setAddedProducts([...addedProducts, id])
    }

    const wasAdded = (id) => {
        return addedProducts.find(i => i == id)
    }

    const listProducts = products.map(product => {
        const button = (wasAdded(product.id)) ? <button onClick={() => onClickAdd(product.id)} className="btn-added"> ADICIONADO </button> : <button onClick={() => onClickAdd(product.id)} className="btn-add"> ADICIONAR </button>
        return (
            <Col className="col-product">
                <img src={product.img}></img>
                <span class="title">{product.title}</span>
                <span class="original-price">{product.originalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                <span class="final-price">{product.finalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                <span class="parcel"> em até <b>{product.parcel}x de {product.parcelValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b> sem juros</span>
                {button}
            </Col>
        )
    })

    return (
        <Container className="container" fluid>
            <Row xs="auto">

                {
                    listProducts
                }

            </Row>
        </Container>

    )
}