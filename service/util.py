#!c:/python27/python
import random

alphabet = "abcdefghijklmnopqrstuvwxyz"
numberstr = "0123456789"

def generateID(size):
	tmp_alphabet = ''.join(random.choice(alphabet) for _ in range(size))
	tmp_numstr = ''.join(random.choice(numberstr) for _ in range(size))
	return tmp_alphabet + tmp_numstr