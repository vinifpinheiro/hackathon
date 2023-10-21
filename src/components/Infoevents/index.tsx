import React from "react";
import {
  FiCalendar,
  FiUser,
  FiClock,
  FiMapPin,
  FiPhone,
  FiFileText,
} from "react-icons/fi";

interface EventInfo {
  eventName: string;
  organizerName: string;
  dateTime: string;
  state: string;
  city: string;
  address: string;
  phone: string;
  description: string;
}

interface InfoCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ label, value, icon }) => (
  <div className="info-card flex w-72 items-center">
    {" "}
    {/* Definindo a largura como 300px */}
    <div className="info-icon">{icon}</div>
    <div className="info-label ml-2">{label}</div>
    <div className="info-value ml-2">{value}</div>
  </div>
);

const EventDetails: React.FC<EventInfo> = ({
  eventName,
  organizerName,
  dateTime,
  state,
  city,
  address,
  phone,
  description,
}) => (
  <div className="event-details gap-10px w-72 text-2xl text-card-foreground">
    <div className="topic flex h-16 items-center border-b-2 border-muted-primary ps-8">
      <InfoCard
        label="Organizado por:"
        value={organizerName}
        icon={<FiUser />}
      />
    </div>
    <div className="topic flex h-16 items-center border-b-2 border-muted-primary ps-8">
      <InfoCard label="Data/Hora" value={dateTime} icon={<FiClock />} />
    </div>
    <div className="topic flex h-16 items-center border-b-2 border-muted-primary ps-8">
      <InfoCard label="Estado:" value={state} icon={<FiMapPin />} />
    </div>
    <div className="topic flex h-16 items-center border-b-2 border-muted-primary ps-8">
      <InfoCard label="Cidade:" value={city} icon={<FiMapPin />} />
    </div>
    <div className="topic flex h-16 items-center border-b-2 border-muted-primary ps-8">
      <InfoCard label="Endereço:" value={address} icon={<FiMapPin />} />
    </div>
    <div className="topic flex h-16 items-center border-b-2 border-muted-primary ps-8">
      <InfoCard label="Telefone:" value={phone} icon={<FiPhone />} />
    </div>
    <div className="topic flex h-16 items-center border-b-2 border-muted-primary ps-8">
      <InfoCard label="Descrição:" value={description} icon={<FiFileText />} />
    </div>
  </div>
);

export default EventDetails;
