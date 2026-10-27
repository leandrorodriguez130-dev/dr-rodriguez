import React, { useState } from 'react';
import { CaseCardIcon } from './CaseCardIcon';
import { SectionWatermark } from './SectionWatermark';
import { getWhatsAppUrl } from '../constants/contact';

interface CaseCard {
  icon: string;
  title: string;
  description: string;
  legalNote: string;
}

interface TabData {
  id: string;
  label: string;
  icon: string;
  cases: CaseCard[];
}

export const EsTuCaso: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('penal');

  const tabs: TabData[] = [
    {
      id: 'penal',
      label: 'PENAL Y CIBERDELITOS',
      icon: 'fa-scale-unbalanced',
      cases: [
        {
          icon: 'fa-user-shield',
          title: 'Me acusan de algo que no hice',
          description:
            'Recibiste una citación, te tomaron declaración o ya tenés una causa abierta por algo que no cometiste. Estar imputado no significa ser culpable. Tenés derechos desde el primer momento y nosotros los ejercemos con firmeza.',
          legalNote:
            'Art. 18 CN — Derecho de defensa inviolable. Nadie puede ser penado sin juicio previo. La carga de la prueba le corresponde al Estado.',
        },
        {
          icon: 'fa-gavel',
          title: 'Tengo una imputación penal',
          description:
            'Te comunicaron formalmente que sos investigado en una causa penal. Lo primero es contar con un defensor que conozca el expediente y proteja tus derechos desde el inicio, antes de cualquier declaración.',
          legalNote:
            'El CPPF garantiza el derecho a defensa técnica desde el primer acto del proceso y a entrevistarte en privado con tu abogado.',
        },
        {
          icon: 'fa-cannabis',
          title: 'Me detuvieron con estupefacientes',
          description:
            'La diferencia entre tenencia simple, tenencia para consumo personal y tráfico cambia radicalmente las consecuencias legales. La cantidad, las circunstancias y el lugar son determinantes para tu defensa.',
          legalNote:
            "Ley 23.737, Art. 14 — Tenencia simple: 1 a 6 años. Tenencia para consumo personal: puede declararse inconstitucional (doctrina 'Arriola', CSJN 2009, basada en Art. 19 CN).",
        },
        {
          icon: 'fa-mask',
          title: 'Me acusan de robo o hurto',
          description:
            'No es lo mismo haber participado que haber cometido el hecho. No es lo mismo robo agravado que hurto simple. Cada caso tiene circunstancias propias y una defensa específica.',
          legalNote:
            'CP Arts. 162 y 164 — Hurto simple: 1 mes a 2 años. Robo simple: 1 mes a 6 años. Los agravantes pueden elevar significativamente esas escalas.',
        },
        {
          icon: 'fa-door-open',
          title: 'Quiero mejorar mi situación estando detenido',
          description:
            'Si estás cumpliendo condena, existen institutos legales para mejorar tu situación: libertad condicional, salidas transitorias, semilibertad o detención domiciliaria. Hay que solicitarlos fundadamente ante el juez de ejecución.',
          legalNote:
            'Ley 24.660 y CP Art. 13 — Libertad condicional al cumplir 2/3 de la condena. Detención domiciliaria en casos del Art. 32 Ley 24.660.',
        },
        {
          icon: 'fa-lock-open',
          title: 'Estoy detenido y no debería estarlo',
          description:
            'Si tu detención preventiva es ilegal o desproporcionada, la excarcelación y el habeas corpus son recursos urgentes que pueden devolverte la libertad durante el proceso.',
          legalNote:
            'Art. 43 CN y Ley 23.098 — El habeas corpus puede presentarse cualquier día y hora, sin formalidades, ante cualquier juez.',
        },
        {
          icon: 'fa-mobile-screen',
          title: 'Me estafaron por WhatsApp o redes sociales',
          description:
            'Te contactó alguien haciéndose pasar por otra persona, te enviaron un link falso, te pidieron datos y desaparecieron con tu dinero. La estafa virtual es un delito penal con consecuencias concretas.',
          legalNote:
            'CP Art. 172 (estafa) y Art. 173 inc. 16 (fraude informático, Ley 26.388) — Pena de 1 mes a 6 años.',
        },
      ],
    },
    {
      id: 'consumidor',
      label: 'DERECHO DEL CONSUMIDOR',
      icon: 'fa-shield-cat',
      cases: [
        {
          icon: 'fa-credit-card',
          title: 'Me vaciaron la cuenta bancaria',
          description:
            'Viste transferencias o débitos que no hiciste y la entidad se desentiende. Quienes brindan servicios tienen responsabilidad objetiva sobre la seguridad de tus fondos y deben responder.',
          legalNote:
            'Ley 24.240 Art. 40 — Responsabilidad objetiva y solidaria del proveedor de servicios por daños y perjuicios al consumidor.',
        },
        {
          icon: 'fa-percent',
          title: 'Intereses imposibles de pagar',
          description:
            'Financiaste compras o contrataste un servicio y las cuotas se volvieron desmedidas con recargos abusivos. La justicia y las leyes de consumo frenan abusos y permiten reducir tasas desproporcionadas.',
          legalNote:
            'CCyCN Art. 771 y Ley 24.240 — Reducción judicial de intereses excesivos y protección del consumidor en operaciones de crédito y financiación.',
        },
        {
          icon: 'fa-building-columns',
          title: 'Una empresa o comercio me cobra de más',
          description:
            'Cargos no autorizados, débitos indebidos, retención de dinero, cambios unilaterales de planes o facturación de servicios que nunca solicitaste.',
          legalNote:
            'Ley 24.240, Arts. 4, 8 y 37 — Deber de información veraz, trato digno, oferta vinculante y nulidad absoluta de cláusulas abusivas.',
        },
        {
          icon: 'fa-box-open',
          title: 'Compré algo con defectos ocultos',
          description:
            'Compraste un producto o vehículo y aparecieron fallas graves que no eran visibles al comprar. Tenés derecho a reclamar la reparación, el reemplazo o la devolución.',
          legalNote:
            'CCyCN Arts. 1051-1058 (vicios redhibitorios) y Ley 24.240 Art. 11 — Garantía legal de 6 meses (productos nuevos) y 3 meses (usados).',
        },
        {
          icon: 'fa-store-slash',
          title: 'Me entregaron algo distinto a lo prometido',
          description:
            'Lo que recibiste no coincide con la publicidad, la oferta o lo que te prometieron al comprar. La oferta comercial obliga con la misma fuerza que el contrato.',
          legalNote:
            'Ley 24.240 Arts. 7 y 8 — Las precisiones publicitarias se incorporan al contrato.',
        },
      ],
    },
    {
      id: 'laboral',
      label: 'DERECHO LABORAL Y ART',
      icon: 'fa-briefcase',
      cases: [
        {
          icon: 'fa-user-times',
          title: 'Me despidieron sin causa',
          description:
            'Te notificaron que estás despedido sin motivo real. Tenés derecho a la indemnización completa: antigüedad, preaviso, integración del mes y liquidación final.',
          legalNote:
            'LCT Art. 245 — Indemnización de 1 mes de la mejor remuneración por cada año trabajado o fracción mayor a 3 meses.',
        },
        {
          icon: 'fa-user-secret',
          title: 'Trabajo en negro',
          description:
            'Trabajás sin recibo, sin aportes ni obra social, o estás registrado por menos horas. Esto es ilegal y habilita reclamos específicos incluso mientras seguís trabajando.',
          legalNote:
            'LCT y normativa vigente — El empleo no registrado genera responsabilidades indemnizatorias agravadas para el empleador.',
        },
        {
          icon: 'fa-coins',
          title: 'No me pagan lo que corresponde',
          description:
            'Te pagan menos del convenio, te descuentan de más o no te abonan horas extras. Cada peso no pagado es una deuda que puede reclamarse con intereses.',
          legalNote:
            'LCT Art. 74 — Obligación de pago íntegro de la remuneración. Las diferencias salariales prescriben a los 2 años (Art. 256 LCT).',
        },
        {
          icon: 'fa-person-falling',
          title: 'Accidente de trabajo y la ART no responde',
          description:
            'Te lastimaste trabajando y la ART te niega tratamiento, te da el alta prematura o no te liquida la indemnización por incapacidad.',
          legalNote:
            'Ley 24.557 (LRT) y Ley 26.773 — Derecho a prestaciones médicas e indemnización por incapacidad permanente.',
        },
        {
          icon: 'fa-person-harassing',
          title: 'Acoso laboral (Mobbing)',
          description:
            'Te hostigan, te aíslan o te asignan tareas humillantes para forzarte a renunciar. No renuncies: el acoso sistemático te permite considerarte despedido con derecho a indemnización.',
          legalNote:
            'LCT Art. 75 — Deber de seguridad y dignidad del trabajador. Habilita despido indirecto (Art. 246 LCT).',
        },
        {
          icon: 'fa-file-signature',
          title: 'Me presionan para renunciar',
          description:
            'Quieren que firmes una renuncia a cambio de promesas informales o bajo amenazas. Si renunciás voluntariamente perdés tus indemnizaciones. Consultá antes de firmar cualquier cosa.',
          legalNote:
            'LCT Art. 240 — La renuncia válida requiere telegrama colacionado. El acto viciado por presión es nulo.',
        },
      ],
    },
    {
      id: 'familia',
      label: 'CIVIL, FAMILIA Y SUCESIONES',
      icon: 'fa-people-roof',
      cases: [
        {
          icon: 'fa-ring',
          title: 'Quiero divorciarme',
          description:
            'En Argentina cualquiera de los dos puede pedir el divorcio sin necesidad de acuerdo ni de probar culpa. Lo complejo es lo que se discute dentro: bienes, vivienda, alimentos y la situación de los hijos.',
          legalNote:
            'CCyCN Arts. 437-438 — Divorcio incausado desde 2015. Art. 439 — Propuesta reguladora obligatoria.',
        },
        {
          icon: 'fa-child',
          title: 'No me dejan ver a mis hijos',
          description:
            'El otro progenitor te impide o dificulta el contacto. El vínculo afectivo es un derecho fundamental de los niños y puede exigirse judicialmente.',
          legalNote:
            'CCyCN Arts. 555-557 — Régimen de comunicación. El progenitor que obstaculice puede ser sancionado.',
        },
        {
          icon: 'fa-hand-holding-dollar',
          title: 'No me pagan la cuota de alimentos',
          description:
            'Existe un acuerdo o sentencia y el obligado no paga. Podés solicitar embargos inmediatos sobre sueldo y cuentas bancarias.',
          legalNote:
            'CCyCN Arts. 658-659 — Deber alimentario. Ley 13.944 — El incumplimiento puede configurar delito penal (1 mes a 2 años).',
        },
        {
          icon: 'fa-arrow-trend-up',
          title: 'La cuota alimentaria quedó desactualizada',
          description:
            'La inflación licuó el valor del acuerdo, tu hijo creció o los ingresos del obligado mejoraron. La cuota puede actualizarse judicialmente.',
          legalNote:
            'CCyCN — Incidente de aumento de cuota por cambio de circunstancias o mayores necesidades.',
        },
        {
          icon: 'fa-file-contract',
          title: 'Conflicto por una herencia',
          description:
            'Un familiar falleció y los herederos no se ponen de acuerdo, hay bienes ocultos o alguien se apropió de más. La ley protege tu parte legítima.',
          legalNote:
            'CCyCN Arts. 2277+ — Acciones de colación y reducción para proteger la legítima hereditaria.',
        },
        {
          icon: 'fa-scroll',
          title: 'Tramitar una sucesión',
          description:
            'Para vender inmuebles, autos o transferir fondos de una persona fallecida es necesario el juicio sucesorio. Te ayudamos a tramitarlo con agilidad.',
          legalNote:
            'CCyCN Arts. 2335-2360 — Declaratoria de herederos e inscripción de bienes.',
        },
      ],
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="es-tu-caso" className="py-24 relief-bg-beige border-b border-[#1B2A49]/10 text-[#1B2A49] relative overflow-hidden">
      {/* Large Asymmetric Embossed Watermark Motif (Justice Scale bleeding off right edge) */}
      <SectionWatermark motif="scale" variant="beige" position="right-center" className="opacity-95" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#1B2A49]/80 uppercase">
            SITUACIONES FRECUENTES
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B2A49] uppercase tracking-wider">
            ¿Es tu caso?
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#1B2A49]/40 to-transparent mx-auto rounded-full" />
          <p className="text-[#1B2A49]/90 text-base sm:text-lg font-normal pt-1">
            Reconocé tu situación. Sabemos cómo ayudarte.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12 border-b border-[#1B2A49]/20 pb-4">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-[#1B2A49] text-white shadow-md border-b-4 border-[#12203A]'
                    : 'text-[#1B2A49]/80 hover:bg-[#1B2A49]/10 hover:text-[#1B2A49]'
                }`}
              >
                <i className={`fa-solid ${tab.icon} text-base`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500 animate-fadeIn">
          {currentTab.cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="group p-7 sm:p-8 rounded-2xl bg-white border border-[#1B2A49]/10 shadow-md hover:shadow-xl hover:border-l-4 hover:border-l-[#1B2A49] hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Title Header */}
                <div className="flex items-start gap-4 mb-5">
                  <CaseCardIcon title={caseItem.title} />
                  <h3 className="font-serif-brand text-xl font-bold text-[#1B2A49] pt-2 leading-tight">
                    {caseItem.title}
                  </h3>
                </div>

                {/* Case Description */}
                <p className="text-[#1B2A49]/85 text-sm leading-relaxed mb-5 font-normal">
                  {caseItem.description}
                </p>

                {/* Legal Note Box */}
                <div className="p-3.5 rounded-lg bg-[#F5F0E8]/70 border-l-3 border-[#1B2A49] text-xs text-[#1B2A49]/90 italic mb-6">
                  {caseItem.legalNote}
                </div>
              </div>

              {/* Card Footer CTA */}
              <a
                href={getWhatsAppUrl(`Hola Leandro, quería consultar por mi caso: ${caseItem.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1B2A49] hover:text-[#12203A] transition-colors group/link pt-2 border-t border-[#1B2A49]/10"
              >
                <span>Consultar este caso →</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
