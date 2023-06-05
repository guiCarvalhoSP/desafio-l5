import { TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {
  let service: SnackbarService;
  let _snackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule
      ]
    });
    service = TestBed.inject(SnackbarService);
    _snackBar = TestBed.inject(MatSnackBar);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve abrir modal com a mensagem passada', () => {
    let spied = spyOn(_snackBar, 'open');
    service.openSnackBar('Mensagem snackbar');
    expect(spied).toHaveBeenCalledWith('Mensagem snackbar', undefined, {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 4000,
    });
  });

  it('Deve abrir modal com a mensagem passada, e com botão para fecha-lo', () => {
    let spied = spyOn(_snackBar, 'open');
    service.openSnackBar('Mensagem snackbar', 'fechar');
    expect(spied).toHaveBeenCalledWith('Mensagem snackbar', 'fechar', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 4000,
    });
  });
});
