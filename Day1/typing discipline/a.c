#include <stdio.h>

int adder(int a, int b)
{
  return a + b;
}

void main()
{
  int sum = 0;
  sum = adder(1, 2);
}

// C is a statically typed language
// The data type of the variables are already assigned/mentioned.

// Statically typed languages are faster than dynamically typed languages
// beacuse we already told compiler what data type is of the variable.
