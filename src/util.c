#include "util.h"
#define INT_DIGITS 5		/* enough for 64 bit integer */
#define NULL ((char *)0)

float _string2float(char *input)
{
    int intValue=0, divisionDecimal=1;
    float result=0;
    while(*input!='.'&&*input!='\0'){
        intValue = (intValue*10+*input-'0');
        input++;
    }
    if(*input=='\0')
        return (float)intValue;
    else
        input++;
    while(*input!='\0'){
        divisionDecimal*=10;
        result=(result*10+*input-'0');
        input++;
    }
    return result=result/divisionDecimal+intValue;
}


char *_itoa(int i)
{
  /* Room for INT_DIGITS digits, - and '\0' */
  static char buf[INT_DIGITS + 2];
  char *p = buf + INT_DIGITS + 1;	/* points to terminating '\0' */
  if (i >= 0) {
    do {
      *--p = '0' + (i % 10);
      i /= 10;
    } while (i != 0);
    return p;
  }
  else {			/* i < 0 */
    do {
      *--p = '0' - (i % 10);
      i /= 10;
    } while (i != 0);
    *--p = '-';
  }
  return p;
}


char *
strchr(const char *s, int ch)
{
        /* scan from left to right */
        while (*s) {
                /* if we hit it, return it */
                if (*s==ch) {
                        return (char *)s;
                }
                s++;
        }

        /* if we were looking for the 0, return that */
        if (*s==ch) {
                return (char *)s;
        }

        /* didn't find it */
        return NULL;
}



int
_atoi(const char *s)
{
        static const char digits[] = "0123456789";  /* legal digits in order */
        unsigned val=0;         /* value we're accumulating */
        int neg=0;              /* set to true if we see a minus sign */

        /* skip whitespace */
        while (*s==' ' || *s=='\t') {
                s++;
        }

        /* check for sign */
        if (*s=='-') {
                neg=1;
                s++;
        }
        else if (*s=='+') {
                s++;
        }

        /* process each digit */
        while (*s) {
                const char *where;
                unsigned digit;
                
                /* look for the digit in the list of digits */
                where = strchr(digits, *s);
                if (where==NULL) {
                        /* not found; not a digit, so stop */
                        break;
                }

                /* get the index into the digit list, which is the value */
                digit = (where - digits);

                /* could (should?) check for overflow here */

                /* shift the number over and add in the new digit */
                val = val*10 + digit;
 
                /* look at the next character */
                s++;
        }
        
        /* handle negative numbers */
        if (neg) {
                return -val;
        }
        
        /* done */
        return val;
}

