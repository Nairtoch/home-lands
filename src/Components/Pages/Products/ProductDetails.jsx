import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import camera from "../../../Assets/Images/camera-solid.svg"
import plan from "../../../Assets/Images/ruler-combined-solid.svg"
import map from "../../../Assets/Images/location-dot-solid.svg"
import favorite from "../../../Assets/Images/heart-regular.svg"

export const ProductDetails = props => {
    const { product_id } = useParams();
    const [productData, setProductData] = useState({});

    useEffect(() => {
        const getProductData = async () => {
            try {
                const result = await axios.get(`https://api.mediehuset.net/homelands/homes/${product_id}`)
                setProductData(result.data.item);
            }
            catch (err) {
                console.error(err)
            }
        }
        getProductData();
    }, [product_id])

    return (
        <section className="ProductDetails">
            {productData ? (
                <div>
                    {productData.images && productData.images[0].filename && productData.images[0].filename.large && (
                        <img src={productData.images[0].filename.large} alt="" />
                    )}
                </div>
            ) : null}
            <div className="Detail-col3">
                <div className="DetailIntro">
                    <h2>{productData.address}</h2>
                    <p>{productData.zipcode} {productData.city}</p>
                    <p>{productData.type} | {productData.floor_space} m<sup>2</sup> | {productData.num_rooms} vær</p>
                    <p>Set {productData.num_clicks} gange</p>
                </div>
                <div className="DetailIcons">
                    <Link to={'/'}><img src={camera} alt="camera icon" /></Link>
                    <Link to={'/'}><img src={plan} alt="blueprint icon" /></Link>
                    <Link to={'/'}><img src={map} alt="map icon" /></Link>
                    <Link to={'/'}><img src={favorite} alt="heart icon" /></Link>
                </div>
                <div className="DetailInfo">
                    <p>Kontantpris: <span>{productData.price}</span></p>
                    <p>Udbetaling <span>{productData.payout}</span></p>
                    <p>Ejerudgift per måned <span>{productData.cost}</span></p>
                </div>
            </div>
            <div className="Detail-col3">
                <div className="DetailInfo">
                    <p>Sagsnr. <span>{productData.id}</span></p>
                    <p>Boligareal <span>{productData.floor_space} m<sup>2</sup></span></p>
                    <p>Grundareal <span>{productData.ground_space} m<sup>2</sup></span></p>
                    <p>Antal rum <span>{productData.num_rooms}</span></p>
                    <p>Antal plan <span>{productData.num_floors}</span></p>
                </div>
                <div className="DetailInfo">
                    <p>Kælder <span>{productData.basement_space} m<sup>2</sup></span></p>
                    <p>Byggeår <span>{productData.year_construction}</span></p>
                    <p>Ombygget <span>{productData.year_rebuilt}</span></p>
                    <p>Energimærke <span>{productData.energy_label_name}</span></p>
                    <p>Liggetid <span>{productData.num_clicks} dage</span></p>
                </div>
                <div className="DetailInfo">
                    <p>Kontantpris: <span>{productData.price}</span></p>
                    <p>Udbetaling <span>{productData.payout}</span></p>
                    <p>Brutto ex. ejerudgift <span>{productData.gross}</span></p>
                    <p>Netto ex. ejerudgift <span>{productData.net}</span></p>
                    <p>Ejerudgift <span>{productData.cost}</span></p>
                </div>
            </div>
            <div className="Detail-col2">
                <div>
                    <p>{productData.description}</p>
                </div>
                <div className="DetailContact">
                    <h2>Kontakt</h2>
                    {productData ? (
                        <div>
                            {productData.staff && productData.staff.image && productData.staff.image && (
                                <img src={productData.staff.image} alt="" />
                            )}
                        </div>
                    ) : null}
                    <p>{productData.staff.firstname} {productData.staff.lastname}</p>
                    <p>{productData.staff.position}</p>
                    <p>Mobil: {productData.staff.phone}</p>
                    <p>Email: {productData.staff.email}</p>
                </div>
            </div>
        </section>
    )
}