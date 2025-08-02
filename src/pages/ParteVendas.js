// import React from "react";
// import "../styles/ParteVendas.css";
// import {  Star, Heart, Shield, Camera, Wifi, Car } from 'lucide-react';

// const packages = [
//   {
//     title: "Pacote Básico",
//     price: "R$ 89",
//     features: [
//       "Hospedagem em quarto compartilhado",
//       "3 refeições balanceadas",
//       "2 passeios diários",
//       "Supervisão veterinária",
//       "Área de recreação",
//     ],
//     styleClass: "basic",
//   },
//   {
//     title: "Pacote Premium",
//     price: "R$ 149",
//     features: [
//       "Suíte individual climatizada",
//       "7 refeições gourmet",
//       "3 passeios + brincadeiras",
//       "Banho e tosa inclusos",
//       "Medicamentos 24h",
//       "Fotos diárias do pet",
//     ],
//     styleClass: "premium",
//     popular: true,
//   },
//   {
//     title: "Pacote VIP",
//     price: "R$ 229",
//     features: [
//       "Suíte master com varanda",
//       "Menu personalizado",
//       "Personal trainer canino",
//       "Spa completo",
//       "Veterinário exclusivo",
//       "Transporte incluído",
//       "Relatório diário detalhado",
//     ],
//     styleClass: "vip",
//   },
// ];

//   const amenities = [
//     { icon: Camera, text: 'Monitoramento 24h' },
//     { icon: Shield, text: 'Segurança Total' },
//     { icon: Heart, text: 'Cuidado Especializado' },
//     { icon: Wifi, text: 'Acompanhe Online' },
//     { icon: Car, text: 'Transporte Disponível' },
//     { icon: Star, text: 'Avaliação 5 Estrelas' }
//   ];

// // const amenities = [
// //   "Monitoramento 24h",
// //   "Segurança Total",
// //   "Cuidados Especializados",
// //   "Acompanhante Online",
// //   "Transporte Disponível",
// //   "Avaliação 5 Estrelas",
// // ];

// export default function PetPalaceHotel() {
//   return (
//     <div className="container-con">
//       <header className="header-hed">
//         <div className="logo-section-log">
//           <div className="logo-icon-log" aria-hidden="true" />
//           <h1 className="place">PetPalace Hotel</h1>
//           <p className="amigo">O melhor cuidado para seu melhor amigo</p>
//         </div>
//         <div className="contact-info-info" aria-label="contato-tal">
//           <span>📞 (11) 9999-8888</span>
//           <a href="mailto:contato@petpalace.com">contato@petpalace.com</a>
//         </div>
//       </header>
//       <main>
//         <section className="intro-section-int" aria-labelledby="package-heading">
//           <h2 id="package-heading">Escolha o Melhor Pacote</h2>
//           <p>Oferecemos cuidados premium para cães de todos os tamanhos e idades.</p>
//         </section>

//         <section className="packages-section-sec">
//           {packages.map(({ title, price, features, styleClass, popular }, i) => (
//             <div
//               key={i}
//               className={`package-card-sec ${styleClass} ${
//                 popular ? "popular" : ""
//               }`}
//               tabIndex={0}
//               aria-label={`${title} por ${price} por dia`}
//             >
//               {popular && <div className="badge-ge" aria-hidden="true">
//                 MAIS POPULAR
//                 </div>}

//               <ul className="feature-list-li">
//                 {features.map((feature, idx) => (
//                   <li key={idx}>
//                     <span className="feature-icon-co" aria-hidden="true" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//               <div className="package-price-pri">
//                 <strong>{title}</strong>
//                 <br />
//                 <span>
//                   {price}
//                   <small>/por dia</small>
//                 </span>
//               </div>
//             </div>
//           ))}
//         </section>

//         <section
//           className="amenities-section-ame"
//           aria-labelledby="amenities-heading"
//           tabIndex={0}
//         >
//           <h3 id="amenities-heading">Nossas Comodidades</h3>
//           <ul className="amenities-list-ne">
//             {amenities.map((item, idx) => (
//               <li key={idx}>
//                 <span className="amenity-icon-ani" aria-hidden="true" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </section>

//         <section className="reservation-section-re" aria-labelledby="reservation-heading">
//           <h3 id="reservation-heading">Faça sua Reserva</h3>
//           <form>
//             <div className="date-group-gru">
//               <label htmlFor="checkin">Check-in</label>
//               <input type="date" id="checkin" name="checkin" aria-required="true" />
//               <label htmlFor="checkout">Check-out</label>
//               <input type="date" id="checkout" name="checkout" aria-required="true" />
//             </div>

//             <fieldset className="pet-info-fa" aria-labelledby="pet-info-legend">
//               <legend id="pet-info-legend">Informações do Pet</legend>
//               <input
//                 type="text"
//                 placeholder="Nome do cachorro"
//                 name="petName"
//                 aria-label="Nome do cachorro"
//                 required
//               />
//               <div className="horizontal-group-up">
//                 <input
//                   type="text"
//                   placeholder="Raça"
//                   name="breed"
//                   aria-label="Raça"
//                   required
//                 />
//                 <input
//                   type="number"
//                   placeholder="Idade"
//                   name="age"
//                   aria-label="Idade"
//                   min="0"
//                   max="100"
//                   required
//                 />
//               </div>
//               <textarea
//                 placeholder="Necessidades especiais, medicamentos, alergias..."
//                 name="specialNeeds"
//                 aria-label="Necessidades especiais, medicamentos, alergias"
//                 rows="2"
//               />
//             </fieldset>

//             <fieldset className="owner-info-ow" aria-labelledby="owner-info-legend">
//               <legend id="owner-info-legend">Dados do Proprietário</legend>
//               <input
//                 type="text"
//                 placeholder="Seu nome completo"
//                 name="ownerName"
//                 aria-label="Seu nome completo"
//                 required
//               />
//               <input
//                 type="tel"
//                 placeholder="Telefone/WhatsApp"
//                 name="phone"
//                 aria-label="Telefone ou WhatsApp"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="E-mail"
//                 name="email"
//                 aria-label="E-mail"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Endereço completo"
//                 name="address"
//                 aria-label="Endereço completo"
//                 required
//               />
//             </fieldset>

//             <button type="submit" className="submit-button-mit" aria-label="Selecione um Pacote">
//               Selecione um Pacote
//             </button>
//             <p className="payment-info-pay">
//               <span aria-hidden="true" className="safe-icon-safe" />
//               Pagamento seguro e garantia total
//             </p>
//           </form>
//         </section>
//       </main>
//     </div>
//   );
// }








import React from "react";
import "../styles/ParteVendas.css";
import { Star, Heart, Shield, Camera, Wifi, Car } from "lucide-react";

const packages = [
  {
    title: "Pacote Básico",
    price: "R$ 89",
    features: [
      "Hospedagem em quarto compartilhado",
      "3 refeições balanceadas",
      "2 passeios diários",
      "Supervisão veterinária",
      "Área de recreação",
    ],
    styleClass: "basic",
  },
  {
    title: "Pacote Premium",
    price: "R$ 149",
    features: [
      "Suíte individual climatizada",
      "7 refeições gourmet",
      "3 passeios + brincadeiras",
      "Banho e tosa inclusos",
      "Medicamentos 24h",
      "Fotos diárias do pet",
    ],
    styleClass: "premium",
    popular: true,
  },
  {
    title: "Pacote VIP",
    price: "R$ 229",
    features: [
      "Suíte master com varanda",
      "Menu personalizado",
      "Personal trainer canino",
      "Spa completo",
      "Veterinário exclusivo",
      "Transporte incluído",
      "Relatório diário detalhado",
    ],
    styleClass: "vip",
  },
];

const amenities = [
  { icon: Camera, text: "Monitoramento 24h" },
  { icon: Shield, text: "Segurança Total" },
  { icon: Heart, text: "Cuidado Especializado" },
  { icon: Wifi, text: "Acompanhe Online" },
  { icon: Car, text: "Transporte Disponível" },
  { icon: Star, text: "Avaliação 5 Estrelas" },
];

export default function PetPalaceHotel() {
  return (
    <div className="container-con">
      <header className="header-hed">
        <div className="logo-section-log">
          <div className="logo-icon-log" aria-hidden="true" />
          <h1 className="place">PetPalace Hotel</h1>
          <p className="amigo">O melhor cuidado para seu melhor amigo</p>
        </div>
        <div className="contact-info-info" aria-label="contato-tal">
          <span>📞 (11) 9999-8888</span>
          <a href="mailto:contato@petpalace.com">contato@petpalace.com</a>
        </div>
      </header>
      <main>
        <section className="intro-section-int" aria-labelledby="package-heading">
          <h2 id="package-heading">Escolha o Melhor Pacote</h2>
          <p>Oferecemos cuidados premium para cães de todos os tamanhos e idades.</p>
        </section>

        <section className="packages-section-sec">
          {packages.map(({ title, price, features, styleClass, popular }, i) => (
            <div
              key={i}
              className={`package-card-sec ${styleClass} ${popular ? "popular" : ""}`}
              tabIndex={0}
              aria-label={`${title} por ${price} por dia`}
            >
              {popular && (
                <div className="badge-ge" aria-hidden="true">
                  MAIS POPULAR
                </div>
              )}

              <ul className="feature-list-li">
                {features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-icon-co" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="package-price-pri">
                <strong>{title}</strong>
                <br />
                <span>
                  {price}
                  <small>/por dia</small>
                </span>
              </div>
            </div>
          ))}
        </section>

        <section
          className="amenities-section-ame"
          aria-labelledby="amenities-heading"
          tabIndex={0}
        >
          <h3 id="amenities-heading">Nossas Comodidades</h3>
          <ul className="amenities-list-ne">
            {amenities.map(({ icon: Icon, text }, idx) => (
              <li key={idx} className="amenity-item">
                <Icon size={18} strokeWidth={2} style={{ marginRight: "8px" }} />
                {text}
              </li>
            ))}
          </ul>
        </section>

        <section
          className="reservation-section-re"
          aria-labelledby="reservation-heading"
        >
          <h3 id="reservation-heading">Faça sua Reserva</h3>
          <form>
            <div className="date-group-gru">
              <label htmlFor="checkin">Check-in</label>
              <input type="date" id="checkin" name="checkin" aria-required="true" />
              <label htmlFor="checkout">Check-out</label>
              <input type="date" id="checkout" name="checkout" aria-required="true" />
            </div>

            <fieldset className="pet-info-fa" aria-labelledby="pet-info-legend">
              <legend id="pet-info-legend">Informações do Pet</legend>
              <input
                type="text"
                placeholder="Nome do cachorro"
                name="petName"
                aria-label="Nome do cachorro"
                required
              />
              <div className="horizontal-group-up">
                <input
                  type="text"
                  placeholder="Raça"
                  name="breed"
                  aria-label="Raça"
                  required
                />
                <input
                  type="number"
                  placeholder="Idade"
                  name="age"
                  aria-label="Idade"
                  min="0"
                  max="100"
                  required
                />
              </div>
              <textarea
                placeholder="Necessidades especiais, medicamentos, alergias..."
                name="specialNeeds"
                aria-label="Necessidades especiais, medicamentos, alergias"
                rows="2"
              />
            </fieldset>

            <fieldset className="owner-info-ow" aria-labelledby="owner-info-legend">
              <legend id="owner-info-legend">Dados do Proprietário</legend>
              <input
                type="text"
                placeholder="Seu nome completo"
                name="ownerName"
                aria-label="Seu nome completo"
                required
              />
              <input
                type="tel"
                placeholder="Telefone/WhatsApp"
                name="phone"
                aria-label="Telefone ou WhatsApp"
                required
              />
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                aria-label="E-mail"
                required
              />
              <input
                type="text"
                placeholder="Endereço completo"
                name="address"
                aria-label="Endereço completo"
                required
              />
            </fieldset>

            <button
              type="submit"
              className="submit-button-mit"
              aria-label="Selecione um Pacote"
            >
              Selecione um Pacote
            </button>
            <p className="payment-info-pay">
              <span aria-hidden="true" className="safe-icon-safe" />
              Pagamento seguro e garantia total
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
