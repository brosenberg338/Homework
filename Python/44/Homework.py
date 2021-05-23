name= 'Baruch Rosenberg'
address= "338 Beach 12th Street";print(name)        
nameList=["Leah","Baila","Sori"]
print(f'{nameList}')
print(nameList[2][ : :3])
print(nameList[-2][1:4:])
# for x in range(1, 11)
 # for y in range(1, 11)




import random
randomInt= random.randint(1,101)
winner= False
while winner== False :
  game= int(input("\nPick a number from 1 to 100 "))
  if game < randomInt :
   print("Guess is too low")
  elif game > randomInt :   
   print("Guess is too high")
  else: 
    print ("You won");   winner=True