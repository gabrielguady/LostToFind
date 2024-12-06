import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Category {
  image: string;
  name: string;
  alt: string;
}

@Component({
  selector: "app-categories",
  standalone: true,
  imports: [CommonModule],
  styleUrl: "./categories.component.css",
  templateUrl: "./categories.component.html",
})
export class CategoriesComponent {
  categories: Category[] = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/16992d78afb73d1eba33dfd9ecb588c20946aff1fb529468693bb07f2f254ec5?placeholderIfAbsent=true&apiKey=6bbbaade0039471890749556eb4252d2",
      name: "Phone",
      alt: "Phone category icon",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f7c9fb8994d4f99a49298d662d879ab05ee7a8829dedab16756e295e7f6829b?placeholderIfAbsent=true&apiKey=6bbbaade0039471890749556eb4252d2",
      name: "Clothes",
      alt: "Clothes category icon",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/24c11075132f677524a9f36597e53255076c729d1d8199e9b71af146d524edcf?placeholderIfAbsent=true&apiKey=6bbbaade0039471890749556eb4252d2",
      name: "Documents",
      alt: "Documents category icon",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/609322ad8421b5e56c6f6ee6508db5b51f200c5c9dea793007f2e25368ef68bc?placeholderIfAbsent=true&apiKey=6bbbaade0039471890749556eb4252d2",
      name: "Automobile",
      alt: "Automobile category icon",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e63b003b5f483786462f6aceb56af92ae689115c78152fcb252fb62af23bc751?placeholderIfAbsent=true&apiKey=6bbbaade0039471890749556eb4252d2",
      name: "Books",
      alt: "Books category icon",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c324ac1948085a3fe04192e2b343d309d4401eef0fd987698e79d616f37e877?placeholderIfAbsent=true&apiKey=6bbbaade0039471890749556eb4252d2",
      name: "Others",
      alt: "Others category icon",
    },
  ];
}
