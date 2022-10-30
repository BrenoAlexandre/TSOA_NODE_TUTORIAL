import { singleton } from 'tsyringe';
import ReservationRepository from '../../services/implementations/reservationRepository';
import { IDeleteReservationRequestDTO } from './deleteReservationRequestDTO';

@singleton()
class DeleteReservationUseCase {
  constructor(private reservationRepository: ReservationRepository) {}

  public async execute(data: IDeleteReservationRequestDTO): Promise<void> {
    const { reservationId } = data;

    const result = await this.reservationRepository.delete(reservationId);

    if (!result) {
      throw new Error('Reservation not found.');
    }
  }
}

export default DeleteReservationUseCase;
