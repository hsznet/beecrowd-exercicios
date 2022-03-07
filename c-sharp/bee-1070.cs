// See https://aka.ms/new-console-template for more information

int x = Convert.ToInt32(Console.ReadLine());


int y = x % 2;

if (y == 0){
    x = x + 1;
}

 int [] range = {1,2,3,4,5,6};

foreach (int num in range)
{
    Console.WriteLine(x);
    x = x +2;
}
    