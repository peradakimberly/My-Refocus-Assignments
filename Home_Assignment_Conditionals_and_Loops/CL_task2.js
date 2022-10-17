function pulseOximeter(pulseRate)
{
    if ((pulseRate >= 40) && (pulseRate <= 100))
    {
        console.log('Normal reading');
    }
    else if ((pulseRate >= 101) && (pulseRate <=109))
    {
        console.log('Acceptable to continue home monitoring');
    }
    else if ((pulseRate >= 110) && (pulseRate <= 130))
    {
        console.log('Seek advice from health professionals');
    }
    else if (pulseRate >= 131)
    {
        console.log('Seek urgent medical advice');
    }
}

pulseOximeter(120);
