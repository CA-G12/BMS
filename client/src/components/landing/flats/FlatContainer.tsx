import NoData from '../NoData';
import FlatCard from './FlatCard';

type FreeFlatType = {
  id: number,
  area:number,
  notes: string
};

const flatsData: FreeFlatType[] = [
  {
    id: 1,
    area: 180,
    notes: 'شقة غربية',
  },
  {
    id: 2,
    area: 160,
    notes: 'شقة جنوبية',
  },
  {
    id: 3,
    area: 190,
    notes: 'شقة شرقية',
  },
];
const FlatContainer: React.FC = () => (
  <div className="flatContainerComponent">
    <h2>شقق متاحة</h2>
    <p>هنالك شقق متوفرة بمساحات مختلفة</p>
    <div className="flatContainer">
      {(flatsData.length !== 0) ? (flatsData.map((flatCard) => (<FlatCard key={flatCard.id} info={flatCard} />))) : (<NoData />)}
    </div>
  </div>
);

export default FlatContainer;
