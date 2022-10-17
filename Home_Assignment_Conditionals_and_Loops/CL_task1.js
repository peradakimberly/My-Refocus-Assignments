function pulseOximeter(oxygenSaturation)
{
    if (oxygenSaturation >= 96)
    {
        console.log('Normal reading');
    }
    else if (oxygenSaturation ==95)
    {
        console.log('Acceptable to continue home monitoring');
    }
    else if ((oxygenSaturation <=94) && (oxygenSaturation >=93))
    {
        console.log('Seek advice from health professionals');
    }
    else if (oxygenSaturation <= 92)
    {
        console.log('Seek urgent medical advice');
    }
}

pulseOximeter(90);
