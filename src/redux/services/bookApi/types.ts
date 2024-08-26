export default interface WorkProps {
  id : string;
  name: string;
  incantation: string;
  effect: string;
  canBeVerbal: true;
  type: string;
  light: string;
  liked: boolean;
  creator: string | null;
  onDelete: (id: string) => void;
  toggleLike: (id: string) => void;
};