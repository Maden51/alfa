export default interface WorkProps {
  id : string;
  name: string;
  incantation: string;
  effect: string;
  canBeVerbal: true;
  type: string;
  light: string;
  like: boolean;
  creator: string | null;
  onDelete: (id: string) => void;
};