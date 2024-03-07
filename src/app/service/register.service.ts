// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersUrl = 'assets/users.json';

  constructor(private http: HttpClient) {}

  register(firstname: string, lastname: string, age: string, email: string, phonenumber: string, login: string, password: string): Observable<boolean> {
    // Загрузить текущий список пользователей из JSON-файла
    return this.http.get<any[]>(this.usersUrl).pipe(
      catchError(error => {
        console.error('Error loading users:', error);
        return throwError('Registration failed. Please try again later.'); // В случае ошибки загрузки вернуть сообщение об ошибке
      }),
      // Обработать загруженный список пользователей и добавить нового пользователя
      switchMap(users => {
        const newUser = { firstname, lastname, age, email, phonenumber, login, password };
        const updatedUsers = [...users, newUser];
        // Сохранить обновленный список пользователей в JSON-файл
        return this.http.put(this.usersUrl, updatedUsers).pipe(
          catchError(error => {
            console.error('Error updating users:', error);
            return throwError('Registration failed. Please try again later.'); // В случае ошибки сохранения вернуть сообщение об ошибке
          })
        );
      }),
      map(() => true) // Вернуть true в случае успешной регистрации
    );
  }
}
