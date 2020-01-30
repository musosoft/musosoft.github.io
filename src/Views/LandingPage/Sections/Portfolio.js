import React from 'react';

const Portfolio = () => (

<div className="section">
<h2 className="text-center title ml-auto mr-auto">My portfolio</h2>
<div className="row">						
    <table className="table table-responsive-sm">
        <thead>
            <tr>
                <th className="text-center">Year</th>
                <th>Client</th>
                <th>Type of work</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="text-center">2019</td>
                <td>SpaceDog</td>
                <td>Wordpress Development, SEO</td>
                <td className="td-actions text-right">
                    <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="In Development" >
                        <i className="fas fa-pencil-ruler"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td className="text-center">2019</td>
                <td>LinShop</td>
                <td>Wordpress Development, SEO</td>
                <td className="td-actions text-right">
                    <a href="https://linshop.sk" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-round" role="button">
                            <i className="fas fa-external-link-alt"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td className="text-center">2019</td>
                <td>Patong Halal Food</td>
                <td>Wordpress Development, Content Marketing</td>
                <td className="td-actions text-right">
                    <button type="button" className="btn btn-primary btn-round open-image-modal" data-toggle="modal" data-target=".bd-image-modal-lg" data-image="./assets/img/patonghalalfood.jpg" title="patonghalalfood.com is Offline :(" >
                        <i className="fas fa-images"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td className="text-center">2019</td>
                <td>ToursPrivate</td>
                <td>Wordpress Development, Naming / Branding & Identity</td>
                <td className="td-actions text-right">
                    <button type="button" className="btn btn-primary btn-round open-image-modal" data-toggle="modal" data-target=".bd-image-modal-lg" data-image="./assets/img/toursprivate.jpg" title="toursprivate.com is Offline :(" >
                        <i className="fas fa-images"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td className="text-center">2019</td>
                <td>Umesh Perera / eFL.gg</td>
                <td>Design & Wordpress Development</td>
                <td className="td-actions text-right">
                    <a href="https://efl.gg" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-round" role="button">
                            <i className="fas fa-external-link-alt"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td className="text-center">2019</td>
                <td>Gamers Paradise</td>
                <td>Design & Wordpress Development</td>
                <td className="td-actions text-right">
                    <a href="https://gamersparadise.camp" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-round" role="button">
                            <i className="fas fa-external-link-alt"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td className="text-center">2018</td>
                <td>Chyťbyt</td>
                <td>Crawler Development, LAMP Development, Proxy server Development, UX</td>
                <td className="td-actions text-right">
                    <button type="button" className="btn btn-primary btn-round open-image-modal" data-toggle="modal" data-target=".bd-image-modal-lg" data-image="./assets/img/chytbyt.jpg" title="chytbyt.cz is Offline :(" >
                        <i className="fas fa-images"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td className="text-center">2018</td>
                <td>ShiShka Creative</td>
                <td>Coding from Design & Development</td>
                <td className="td-actions text-right">
                    <button type="button" className="btn btn-primary btn-round open-image-modal" data-toggle="modal" data-target=".bd-image-modal-lg" data-image="./assets/img/shishka.jpg" title="shishka.sk is Offline :(" >
                        <i className="fas fa-images"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td className="text-center">2018</td>
                <td>Patoma Commerce</td>
                <td>Design & MeteorJS Development</td>
                <td className="td-actions text-right">
                    <button type="button" className="btn btn-primary btn-round open-image-modal" data-toggle="modal" data-target=".bd-image-modal-lg" data-image="./assets/img/patomacommerce.jpg" title="patomacommerce.cz is Offline :(" >
                        <i className="fas fa-images"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td className="text-center">2018</td>
                <td>Patoma Luxury</td>
                <td>Coding from Design, MeteorJS Development</td>
                <td className="td-actions text-right">
                    <button type="button" className="btn btn-primary btn-round open-image-modal" data-toggle="modal" data-target=".bd-image-modal-lg" data-image="./assets/img/patomaluxury.jpg" title="patomaluxury.cz is Offline :(" >
                        <i className="fas fa-images"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td className="text-center">2018</td>
                <td>Revolta / Matrix Professional</td>
                <td>SiteCore Content Management</td>
                <td className="td-actions text-right">
                    <button type="button" className="btn btn-primary btn-round open-image-modal" data-toggle="modal" data-target=".bd-image-modal-lg" data-image="./assets/img/matrixprofessional.jpg" title="matrixprofessional.cz is Offline :(" >
                        <i className="fas fa-images"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td className="text-center">2018</td>
                <td>Revolta / Nike</td>
                <td>Expression Engine Content Management</td>
                <td className="td-actions text-right">
                    <a href="https://nike.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-round" role="button">
                            <i className="fas fa-external-link-alt"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td className="text-center">2018</td>
                <td>Revolta / Nike</td>
                <td>Responsive Cross-Client e-mail Campaign HTML Coding</td>
                <td className="td-actions text-right">
                    <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Confidental materials only, can't share :(" >
                        <i className="fas fa-user-shield"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td className="text-center">2018</td>
                <td>Revolta / BOSCH</td>
                <td>Responsive Cross-Client e-mail Campaign HTML Coding</td>
                <td className="td-actions text-right">
                    <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Confidental materials only, can't share :(" >
                        <i className="fas fa-user-shield"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td className="text-center">2017</td>
                <td>Revolta / Redken</td>
                <td>Wordpress Content Management</td>
                <td className="td-actions text-right">
                    <a href="https://redken.cz" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-round" role="button">
                            <i className="fas fa-external-link-alt"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td className="text-center">2016</td>
                <td>Rivals</td>
                <td>Counter-Strike Dedicated Server Development</td>
                <td className="td-actions text-right">
                    <a href="https://github.com/musosoft/rivals-srcds" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-round" role="button">
                            <i className="fas fa-external-link-alt"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td className="text-center">2015</td>
                <td>Sharkam</td>
                <td>Drupal Content Management</td>
                <td className="td-actions text-right">
                    <a href="https://sharkam.sk" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-round" role="button">
                            <i className="fas fa-external-link-alt"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td className="text-center">2015</td>
                <td>Sharkam / VolteCatering</td>
                <td>Redesign & Content Management</td>
                <td className="td-actions text-right">
                    <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Offline :(" >
                        <i className="fas fa-images"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td className="text-center">2015</td>
                <td>Sharkam / EventCatering</td>
                <td>Magento e-Commerce Development</td>
                <td className="td-actions text-right">
                    <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Offline :(" >
                        <i className="fas fa-images"></i>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
);

export default Portfolio;
